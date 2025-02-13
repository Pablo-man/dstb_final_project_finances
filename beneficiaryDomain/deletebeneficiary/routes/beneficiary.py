from fastapi import APIRouter, Response, status
from config.db import conn
from models.beneficiary import beneficiaries
from schemas.beneficiary import Beneficiary
from typing import List
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select, insert


beneficiary = APIRouter()

@beneficiary.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT, tags=["beneficiaries"])
def get_beneficiary(id: str):
    conn.execute(beneficiaries.delete().where(beneficiaries.c.id == id))    
    return Response(status_code=HTTP_204_NO_CONTENT)