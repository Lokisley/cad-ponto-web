from pydantic import BaseModel


class DeleteForm(BaseModel):
    username: str

    class Config:
        orm_mode = False
