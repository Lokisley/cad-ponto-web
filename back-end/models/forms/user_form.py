from pydantic import BaseModel


class UserForm(BaseModel):
    name: str
    cpf: str
    pis: str
    email: str
    password: str
    street: str
    number: int
    complement: str
    cep: str
    city: str
    state: str
    country: str

    class Config:
        orm_mode = True
