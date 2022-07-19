from fastapi import FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal
from models.forms.login_form import LoginForm
from models.forms.user_form import UserForm
from models.forms.delete_form import DeleteForm
from models.models import User

app = FastAPI()

origins = ["http://localhost:3000", "http://localhost:8000", "http://localhost"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)


db = SessionLocal()


@app.post("/login", response_model=UserForm, status_code=status.HTTP_200_OK)
def login(login_form: LoginForm):
    user = db.query(User).filter(User.email == login_form.username).first()
    if user is None:
        user = db.query(User).filter(User.pis == login_form.username).first()
        if user is None:
            user = db.query(User).filter(User.cpf == login_form.username).first()
            if user is None:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
                )
    if user.password != login_form.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect password"
        )
    return user


@app.post("/register", response_model=UserForm, status_code=status.HTTP_201_CREATED)
def register_user(user: UserForm):

    db.item = db.query(User).filter(User.email == user.email).first()
    if db.item:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="E-mail already exists"
        )
    db.item = db.query(User).filter(User.pis == user.pis).first()
    if db.item:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="PIS already exists"
        )
    db.item = db.query(User).filter(User.cpf == user.cpf).first()
    if db.item:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="CPF already exists"
        )

    new_user = User(
        name=user.name,
        cpf=user.cpf,
        pis=user.pis,
        email=user.email,
        password=user.password,
        street=user.street,
        number=user.number,
        complement=user.complement,
        cep=user.cep,
        city=user.city,
        state=user.state,
        country=user.country,
    )

    db.add(new_user)
    db.commit()

    return new_user


@app.put("/update", response_model=UserForm, status_code=status.HTTP_200_OK)
def update_user_data(new_user: UserForm):
    user = db.query(User).filter(User.email == new_user.email).first()
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    user.name = new_user.name
    user.cpf = new_user.cpf
    user.pis = new_user.pis
    user.email = new_user.email
    user.password = new_user.password
    user.street = new_user.street
    user.number = new_user.number
    user.complement = new_user.complement
    user.cep = new_user.cep
    user.city = new_user.city
    user.state = new_user.state
    user.country = new_user.country

    db.commit()

    return new_user


@app.delete("/delete", response_model=UserForm, status_code=status.HTTP_200_OK)
def delete_user(user: DeleteForm):
    user = db.query(User).filter(User.email == user.username).first()
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    db.delete(user)
    db.commit()

    return user
