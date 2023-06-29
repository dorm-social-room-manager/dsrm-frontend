import { AddRoomQueryType, ReadRoomTypesResponseType, RoomTypeDTO } from '../../types/OperationTypes.types';
import { useMutation } from '@tanstack/react-query';

const getRequestObject = (values: AddRoomQueryType) => {
  return {
    body: JSON.stringify(values),
    headers: {
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
};

const readRoomTypes = async (): Promise<ReadRoomTypesResponseType> => {
  const fetchQuery = `${import.meta.env.VITE_API_URL}/room-types`;
  return await fetch(fetchQuery)
    .then((response) => {
      return response.json();
    })
    .then((data: ReadRoomTypesResponseType) => {
      console.log(data);
      return data;
    })
    .catch(() => {
      throw new Error("Couldn't read room types");
    });
};
export const useReadRoomTypesMutation = (handleInputData: (roomData: RoomTypeDTO) => void) => {
  return useMutation(readRoomTypes, {
    onSuccess: (data) => {
      if (data.content !== undefined) {
        const roomTypes: RoomTypeDTO = data.content;
        // console.log(roomTypes);
        handleInputData(roomTypes);
      }
    },
  });
};

export const addRoom = async (values: AddRoomQueryType): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/admin/rooms`, getRequestObject(values)).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error("Couldn't create room");
    }
  });
};

export const useAddRoomMutation = () => {
  return useMutation(addRoom);
};
