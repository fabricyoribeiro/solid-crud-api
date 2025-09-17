export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
}

export interface ICreateUserResponseDTO {
  id: string  
  name: string
  email: string
}