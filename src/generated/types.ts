/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/users": {
    get: operations["readUsers"];
    post: operations["addUser"];
  };
  "/rooms": {
    get: operations["readRooms"];
    post: operations["addRoom"];
  };
  "/room-types": {
    get: operations["readRoomTypes"];
    post: operations["addRoomType"];
  };
  "/roles": {
    get: operations["readRoles"];
    post: operations["addRole"];
  };
  "/reservations": {
    get: operations["readReservations"];
    post: operations["addReservation"];
  };
  "/users/{id}": {
    get: operations["getUser"];
  };
  "/rooms/{id}": {
    get: operations["getRoom"];
  };
  "/room-types/{id}": {
    get: operations["getRoomType"];
  };
  "/roles/{id}": {
    get: operations["getRole"];
  };
  "/reservations/{id}": {
    get: operations["getReservation"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    UserRequestDTO: {
      email?: string;
      password?: string;
      name?: string;
      surname?: string;
      roles?: (number)[];
    };
    LocalTime: {
      /** Format: int32 */
      hour?: number;
      /** Format: int32 */
      minute?: number;
      /** Format: int32 */
      second?: number;
      /** Format: int32 */
      nano?: number;
    };
    RoomRequestDTO: {
      name?: string;
      /** Format: int32 */
      number?: number;
      /** Format: int32 */
      floor?: number;
      /** Format: int64 */
      type?: number;
      /** Format: int32 */
      maxCapacity?: number;
      openingTime?: components["schemas"]["LocalTime"];
      closingTime?: components["schemas"]["LocalTime"];
    };
    RoomTypeRequestDTO: {
      name?: string;
    };
    RoleRequestDTO: {
      name?: string;
    };
    ReservationRequestDTO: {
      /** Format: int64 */
      room?: number;
      /** Format: date-time */
      openingTime?: string;
      /** Format: date-time */
      closingTime?: string;
      /** Format: int64 */
      user?: number;
    };
    PageUserDTO: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int64 */
      totalElements?: number;
      /** Format: int32 */
      size?: number;
      content?: (components["schemas"]["UserDTO"])[];
      /** Format: int32 */
      number?: number;
      sort?: components["schemas"]["SortObject"];
      pageable?: components["schemas"]["PageableObject"];
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      empty?: boolean;
    };
    PageableObject: {
      /** Format: int64 */
      offset?: number;
      sort?: components["schemas"]["SortObject"];
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      paged?: boolean;
      unpaged?: boolean;
    };
    Role: {
      /** Format: int64 */
      id?: number;
      name?: string;
    };
    SortObject: {
      empty?: boolean;
      sorted?: boolean;
      unsorted?: boolean;
    };
    UserDTO: {
      email?: string;
      name?: string;
      surname?: string;
      roles?: (components["schemas"]["Role"])[];
      /** Format: date-time */
      banEndDate?: string;
      banned?: boolean;
    };
    Pageable: {
      /** Format: int32 */
      page?: number;
      /** Format: int32 */
      size?: number;
      sort?: (string)[];
    };
    PageRoomDTO: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int64 */
      totalElements?: number;
      /** Format: int32 */
      size?: number;
      content?: (components["schemas"]["RoomDTO"])[];
      /** Format: int32 */
      number?: number;
      sort?: components["schemas"]["SortObject"];
      pageable?: components["schemas"]["PageableObject"];
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      empty?: boolean;
    };
    RoomDTO: {
      /** Format: int32 */
      roomNumber?: number;
      /** Format: int32 */
      floor?: number;
      roomType?: components["schemas"]["RoomType"];
      /** Format: int32 */
      maxCapacity?: number;
      keyOwner?: components["schemas"]["User"];
      openingTime?: components["schemas"]["LocalTime"];
      closingTime?: components["schemas"]["LocalTime"];
      /** Format: date */
      unavailableStart?: string;
      /** Format: date */
      unavailableEnd?: string;
    };
    RoomType: {
      /** Format: int64 */
      id?: number;
      name?: string;
    };
    User: {
      /** Format: int64 */
      id?: number;
      email?: string;
      password?: string;
      name?: string;
      surname?: string;
      roles?: (components["schemas"]["Role"])[];
    };
    PageRoomTypeDTO: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int64 */
      totalElements?: number;
      /** Format: int32 */
      size?: number;
      content?: (components["schemas"]["RoomTypeDTO"])[];
      /** Format: int32 */
      number?: number;
      sort?: components["schemas"]["SortObject"];
      pageable?: components["schemas"]["PageableObject"];
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      empty?: boolean;
    };
    RoomTypeDTO: {
      name?: string;
    };
    PageRoleDTO: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int64 */
      totalElements?: number;
      /** Format: int32 */
      size?: number;
      content?: (components["schemas"]["RoleDTO"])[];
      /** Format: int32 */
      number?: number;
      sort?: components["schemas"]["SortObject"];
      pageable?: components["schemas"]["PageableObject"];
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      empty?: boolean;
    };
    RoleDTO: {
      name?: string;
    };
    PageReservationDTO: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int64 */
      totalElements?: number;
      /** Format: int32 */
      size?: number;
      content?: (components["schemas"]["ReservationDTO"])[];
      /** Format: int32 */
      number?: number;
      sort?: components["schemas"]["SortObject"];
      pageable?: components["schemas"]["PageableObject"];
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      empty?: boolean;
    };
    ReservationDTO: {
      room?: components["schemas"]["Room"];
      /** Format: date-time */
      startTime?: string;
      /** Format: date-time */
      endTime?: string;
      user?: components["schemas"]["User"];
    };
    Room: {
      /** Format: int64 */
      id?: number;
      /** Format: int32 */
      roomNumber?: number;
      /** Format: int32 */
      floor?: number;
      roomType?: components["schemas"]["RoomType"];
      /** Format: int32 */
      maxCapacity?: number;
      keyOwner?: components["schemas"]["User"];
      openingTime?: components["schemas"]["LocalTime"];
      closingTime?: components["schemas"]["LocalTime"];
      /** Format: date */
      unavailableStart?: string;
      /** Format: date */
      unavailableEnd?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  readUsers: {
    parameters?: {
        /** @description Zero-based page index (0..N) */
        /** @description The size of the page to be returned */
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
      query?: {
        page?: number;
        size?: number;
        sort?: (string)[];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["PageUserDTO"];
        };
      };
    };
  };
  addUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserRequestDTO"];
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  readRooms: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["PageRoomDTO"];
        };
      };
    };
  };
  addRoom: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RoomRequestDTO"];
      };
    };
    responses: {
      /** @description Created */
      201: never;
    };
  };
  readRoomTypes: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["PageRoomTypeDTO"];
        };
      };
    };
  };
  addRoomType: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RoomTypeRequestDTO"];
      };
    };
    responses: {
      /** @description Created */
      201: never;
    };
  };
  readRoles: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["PageRoleDTO"];
        };
      };
    };
  };
  addRole: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RoleRequestDTO"];
      };
    };
    responses: {
      /** @description Created */
      201: never;
    };
  };
  readReservations: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["PageReservationDTO"];
        };
      };
    };
  };
  addReservation: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["ReservationRequestDTO"];
      };
    };
    responses: {
      /** @description Created */
      201: never;
    };
  };
  getUser: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["UserDTO"];
        };
      };
    };
  };
  getRoom: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RoomDTO"];
        };
      };
    };
  };
  getRoomType: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RoomTypeDTO"];
        };
      };
    };
  };
  getRole: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RoleDTO"];
        };
      };
    };
  };
  getReservation: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ReservationDTO"];
        };
      };
    };
  };
}