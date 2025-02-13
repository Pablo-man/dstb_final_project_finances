from fastapi import APIRouter, Response, status
from config.db import conn
from models.beneficiary import beneficiaries
from schemas.beneficiary import Beneficiary
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select, insert


beneficiary = APIRouter()

@beneficiary.get("/")
def get_beneficiaries():
    result = conn.execute(beneficiaries.select()).fetchall()
    return [dict(row._mapping) for row in result]

@beneficiary.get("/{id}")
def get_beneficiary(id: str):
    result = conn.execute(beneficiaries.select().where(beneficiaries.c.id == id)).first()
    
    if result is None:
        return {"error": "Beneficiary not found"}, 404
    
    return dict(result._mapping)