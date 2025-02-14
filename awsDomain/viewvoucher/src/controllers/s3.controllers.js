import {S3Client, ListObjectsCommand, GetObjectCommand} from '@aws-sdk/client-s3'
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'
import { AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_KEY } from '../../config.js'

const client = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials:{
        accessKeyId: AWS_PUBLIC_KEY,
        secretAccessKey: AWS_SECRET_KEY
    }
})

export const listImages = async (req, res)=>{
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKET_NAME
    })
    const result = await client.send(command)
    res.json(result.Contents)
}

export const getURL = async (req, res)=>{
    const  {filename} = req.params
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: filename
    })
    const result = await getSignedUrl(client, command, {expiresIn: 3600})
    res.json(result)
}