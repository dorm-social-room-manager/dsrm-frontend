import { AddRoomQueryType, ReadRoomTypesResponseType, RoomTypeDTO, UserDTO } from '../../types/OperationTypes.types';
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
      return data;
    })
    .catch(() => {
      throw new Error("Couldn't read room types");
    });
};
export const useReadRoomTypesMutation = (handleInputData: (userData: UserDTO[]) => void) => {
  return useMutation(readRoomTypes, {
    onSuccess: (data) => {
      if (data.content !== undefined) {
        const roomTypes: RoomTypeDTO = data.content;
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
