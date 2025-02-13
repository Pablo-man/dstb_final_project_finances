from fastapi import APIRouter, Response, status
from config.db import conn
from models.beneficiary import beneficiaries
from schemas.beneficiary import Beneficiary
from typing import List
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select, insert


beneficiary = APIRouter()

@beneficiary.post("/", response_model=Beneficiary, tags=["beneficiaries"])
def create_beneficiary(ben: Beneficiary):
    new_beneficiary = {"name": ben.name, "description": ben.description}
    result = conn.execute(beneficiaries.insert().values(new_beneficiary))
    result2 = conn.execute(beneficiaries.select().where(beneficiaries.c.id == result.lastrowid )).first()
    conn.commit() 
    return dict(result2._mapping)