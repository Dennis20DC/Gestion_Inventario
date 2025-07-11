// //1

// import jwt from 'jsonwebtoken'

// const JWT_SECRET = process.env.JWT_SECRET || '123ABC321CBD//.'

// export const signToken = (payload: object, expiresIn: any= '2 days') => {
//     return jwt.sign(payload, JWT_SECRET, { expiresIn });
// }

// export const verifyToken = (token: string) =>
//     jwt.verify(token, JWT_SECRET);