import {S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand} from '@aws-sdk/client-s3'
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'
import { AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_KEY } from '../../config.js'
import fs from 'fs'

const client = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials:{
        accessKeyId: AWS_PUBLIC_KEY,
        secretAccessKey: AWS_SECRET_KEY
    }
})

export const uploadImage = async (req, res)=>{
    const file = req.files.file
    const stream = fs.createReadStream(file.tempFilePath)
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.name,
        Body: stream
    }
    const command = new PutObjectCommand(uploadParams)
    const result =  await client.send(command)
    res.json({result})
}