from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://admin:pablo-man33@mysqldbfinances.c7eoa4y62lq2.us-east-2.rds.amazonaws.com:3306/finances")

meta = MetaData()

conn = engine.connect()