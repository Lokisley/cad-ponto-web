from pydantic import BaseModel


class LoginForm(BaseModel):
    username: str
    password: str

    class Config:
        orm_mode = False
