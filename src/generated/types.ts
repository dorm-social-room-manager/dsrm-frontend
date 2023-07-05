/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/authenticate": {
    put: operations["authenticateUser"];
  };
  "/admin/rooms/{id}": {
    put: operations["updateRoom"];
    delete: operations["deleteRoom"];
  };
  "/admin/reservations/{id}": {
    put: operations["updateReservation"];
    delete: operations["deleteReservation"];
  };
  "/users": {
    post: operations["addUser"];
  };
  "/reservations": {
    get: operations["readReservations"];
    post: operations["addReservation"];
  };
  "/admin/users": {
    get: operations["readUsers"];
    post: operations["addUser_1"];
  };
  "/admin/rooms": {
    post: operations["addRoom"];
  };
  "/admin/room-types": {
    post: operations["addRoomType"];
  };
  "/admin/roles": {
    get: operations["readRoles"];
    post: operations["addRole"];
  };
  "/admin/reservations": {
    post: operations["addReservation_1"];
  };
  "/admin/users/{id}/roles": {
    patch: operations["partialUpdateUser"];
  };
  "/users/{id}": {
    get: operations["getUser"];
  };
  "/rooms": {
    get: operations["readRooms"];
  };
  "/rooms/{id}": {
    get: operations["getRoom"];
  };
  "/room-types": {
    get: operations["readRoomTypes"];
  };
  "/room-types/{id}": {
    get: operations["getRoomType"];
  };
  "/reservations/{id}": {
    get: operations["getReservation"];
  };
  "/admin/users/{id}": {
    get: operations["getUser_1"];
    delete: operations["deleteUser"];
  };
  "/admin/roles/{id}": {
    get: operations["getRole"];
  };
  "/admin/room-types/{id}": {
    delete: operations["deleteRoomType"];
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
    RoomRequestDTO: {
      name: string;
      /** Format: int32 */
      number: number;
      /** Format: int32 */
      floor: number;
      keyOwner: string;
      type: string;
      /** Format: int32 */
      maxCapacity: number;
      openingTime: string;
      closingTime: string;
    };
    ReservationRequestDTO: {
      room: string;
      from: string;
      to: string;
      user: string;
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
    RoomTypeRequestDTO: {
      name: string;
    };
    RoleRequestDTO: {
      name: string;
    };
    UserRolesOnlyDTO: {
      roles?: (string)[];
    };
    Role: {
      id?: string;
      name?: string;
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
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      pageable?: components["schemas"]["PageableObject"];
      empty?: boolean;
    };
    PageableObject: {
      /** Format: int64 */
      offset?: number;
      sort?: components["schemas"]["SortObject"];
      /** Format: int32 */
      pageSize?: number;
      /** Format: int32 */
      pageNumber?: number;
      paged?: boolean;
      unpaged?: boolean;
    };
    RoomDTO: {
      /** Format: int32 */
      roomNumber?: number;
      /** Format: int32 */
      floor?: number;
      roomType?: components["schemas"]["RoomTypeDTO"];
      /** Format: int32 */
      maxCapacity?: number;
      keyOwner?: components["schemas"]["UserDTO"];
      openingTime?: string;
      closingTime?: string;
      /** Format: date */
      unavailableStart?: string;
      /** Format: date */
      unavailableEnd?: string;
    };
    RoomTypeDTO: {
      id?: string;
      name?: string;
    };
    SortObject: {
      empty?: boolean;
      sorted?: boolean;
      unsorted?: boolean;
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
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      pageable?: components["schemas"]["PageableObject"];
      empty?: boolean;
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
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      pageable?: components["schemas"]["PageableObject"];
      empty?: boolean;
    };
    ReservationDTO: {
      room?: components["schemas"]["RoomDTO"];
      from?: string;
      to?: string;
      user?: components["schemas"]["UserDTO"];
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
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      pageable?: components["schemas"]["PageableObject"];
      empty?: boolean;
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
      first?: boolean;
      last?: boolean;
      /** Format: int32 */
      numberOfElements?: number;
      pageable?: components["schemas"]["PageableObject"];
      empty?: boolean;
    };
    RoleDTO: {
      name?: string;
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
  updateRoom: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RoomRequestDTO"];
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
  deleteRoom: {
    parameters: {
      path: {
        id: string;
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
  updateReservation: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ReservationRequestDTO"];
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
  deleteReservation: {
    parameters: {
      path: {
        id: string;
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
  addUser_1: {
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
  addReservation_1: {
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
  readRooms: {
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
  readRoomTypes: {
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
  getUser_1: {
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
  deleteUser: {
    parameters: {
      path: {
        id: string;
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
  deleteRoomType: {
    parameters: {
      path: {
        id: string;
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
}
