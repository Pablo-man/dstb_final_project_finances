from fastapi import APIRouter, Response, status
from config.db import conn
from models.beneficiary import beneficiaries
from schemas.beneficiary import Beneficiary
from typing import List
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select, insert


beneficiary = APIRouter()

@beneficiary.get("/", response_model=List[Beneficiary], tags=["beneficiaries"])
def get_beneficiaries():
    result = conn.execute(beneficiaries.select()).fetchall()
    return [dict(row._mapping) for row in result]


@beneficiary.post("/", response_model=Beneficiary, tags=["beneficiaries"])
def create_beneficiary(ben: Beneficiary):
    new_beneficiary = {"name": ben.name, "description": ben.description}
    result = conn.execute(beneficiaries.insert().values(new_beneficiary))
    result2 = conn.execute(beneficiaries.select().where(beneficiaries.c.id == result.lastrowid )).first()
    return dict(result2._mapping)

@beneficiary.get("/{id}", response_model=Beneficiary, tags=["beneficiaries"])
def get_beneficiary(id: str):
    result = conn.execute(beneficiaries.select().where(beneficiaries.c.id == id)).first()
    
    if result is None:
        return {"error": "Beneficiary not found"}, 404
    
    return dict(result._mapping)

@beneficiary.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT, tags=["beneficiaries"])
def get_beneficiary(id: str):
    conn.execute(beneficiaries.delete().where(beneficiaries.c.id == id))    
    return Response(status_code=HTTP_204_NO_CONTENT)

@beneficiary.put("/{id}", response_model=Beneficiary, tags=["beneficiaries"])
def get_beneficiary(id: str, ben: Beneficiary):
    conn.execute(beneficiaries.update().values(name= ben.name, description= ben.description).where(beneficiaries.c.id == id))
    result = conn.execute(beneficiaries.select().where(beneficiaries.c.id == id)).first()
    return dict(result._mapping)