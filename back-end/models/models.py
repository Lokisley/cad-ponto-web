from database import Base
from sqlalchemy import String, Integer, Column


class User(Base):
    __tablename__ = "users"
    name = Column(String, nullable=False)
    cpf = Column(String, nullable=False, unique=True)
    pis = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, primary_key=True, unique=True)
    password = Column(String, nullable=False)
    street = Column(String, nullable=False)
    number = Column(Integer, nullable=False)
    complement = Column(String, nullable=False)
    cep = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)

    def __repr__(self):
        return f"<User(name={self.name}, cpf={self.cpf}, pis={self.pis}, email={self.email}, password={self.password}, street={self.street}, number={self.number}, complement={self.complement}, cep={self.cep}, city={self.city}, state={self.state}, country={self.country})>"
