/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/authenticate": {
    put: operations["authenticateUser"];
  };
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
  "/users/{id}/roles": {
    patch: operations["partialUpdateUser"];
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
    LoginDetailsRequestDTO: {
      username: string;
      password: string;
    };
    JwtResponse: {
      accessToken?: string;
      refreshToken?: string;
    };
    UserRequestDTO: {
      email: string;
      password: string;
      name: string;
      surname: string;
      /** Format: int32 */
      roomNumber: number;
      roles?: (string)[];
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
      name: string;
      /** Format: int32 */
      number: number;
      /** Format: int32 */
      floor: number;
      type?: string;
      /** Format: int32 */
      maxCapacity: number;
      openingTime: components["schemas"]["LocalTime"];
      closingTime: components["schemas"]["LocalTime"];
    };
    RoomTypeRequestDTO: {
      name: string;
    };
    RoleRequestDTO: {
      name?: string;
    };
    ReservationRequestDTO: {
      room: string;
      /** Format: date-time */
      openingTime: string;
      /** Format: date-time */
      closingTime: string;
      user: string;
    };
    UserRolesOnlyDTO: {
      roles?: (string)[];
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
      id?: string;
      name?: string;
    };
    SortObject: {
      empty?: boolean;
      sorted?: boolean;
      unsorted?: boolean;
    };
    UserDTO: {
      id?: string;
      email?: string;
      name?: string;
      surname?: string;
      roles?: (components["schemas"]["Role"])[];
      /** Format: int32 */
      roomNumber?: number;
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
      id?: string;
      name?: string;
    };
    User: {
      id?: string;
      email?: string;
      password?: string;
      name?: string;
      surname?: string;
      /** Format: int32 */
      roomNumber?: number;
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
      id?: string;
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

  authenticateUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginDetailsRequestDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["JwtResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  readUsers: {
    parameters?: {
        /** @description Zero-based page index (0..N) */
        /** @description The size of the page to be returned */
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
      query?: {
        isPending?: boolean;
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
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
      201: never;
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  readReservations: {
    parameters?: {
        /** @description Zero-based page index (0..N) */
        /** @description The size of the page to be returned */
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
      query?: {
        userId?: string;
        page?: number;
        size?: number;
        sort?: (string)[];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["PageReservationDTO"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
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
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  partialUpdateUser: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserRolesOnlyDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: never;
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  getUser: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["UserDTO"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  getRoom: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RoomDTO"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  getRoomType: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RoomTypeDTO"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  getRole: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RoleDTO"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
  getReservation: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "*/*": components["schemas"]["ReservationDTO"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "*/*": (string)[];
        };
      };
    };
  };
}
