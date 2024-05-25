import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetch } from '@/hooks/useFetch.js';
import { useWebSocket } from '@/hooks/useWebSocket.js';
import ULRs from '@/redux-store/constants';
import { getUser } from '@/redux-store/selectors.js';
import { ListStyled, Text, Item, ListItems } from './RoomsListStyled';
import { Flag, ScrollBar } from '../SearchInput/SearchInputStyled.js';

const RoomsList = () => {
  const [countryRooms, setCountryRooms] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const userId = useSelector(getUser)?.id;
  const { subscribeToCountryRoom, openCountryRoom } = useWebSocket();
  const { responseData } = useFetch(ULRs.userCountries(userId));

  useEffect(() => {
    if (responseData && userId) {
      setCountryRooms(responseData);
    }
    console.log('response country', responseData);
  }, [responseData]);

  useEffect(() => {
    if (selectedCountry) {
      subscribeToCountryRoom(selectedCountry);
      console.log('Subscribe succesfull');
    }
  }, [selectedCountry]);

  const handleOpenCountryRoom = countryName => {
    setSelectedCountry(countryName);
    console.log('selectedItem name', countryName);
    openCountryRoom(selectedCountry);
  };

  return (
    <ListStyled>
      {countryRooms.length ? (
        <ListItems>
          <ScrollBar>
            {countryRooms.map(room => (
              <Item
                key={room.id}
                onClick={() => handleOpenCountryRoom(room.name)}
              >
                <Flag
                  loading="lazy"
                  width="32"
                  srcSet={`https://flagcdn.com/w40/${room.flagCode}.png 2x`}
                  src={`https://flagcdn.com/w20/${room.flagCode}.png`}
                  alt={`${room.flagCode} flag`}
                />
                <p>{room.name}</p>
              </Item>
            ))}
          </ScrollBar>
        </ListItems>
      ) : (
        <Text>
          There are no rooms in the list.
          <br /> Find chat of a country and it will be shown here
        </Text>
      )}
    </ListStyled>
  );
};

export default RoomsList;
