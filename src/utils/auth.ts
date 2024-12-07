import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET!;

// Generate JWT using jose
export const generateToken = async (payload: { id: string; email: string }) => {
    const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' }) // Set the algorithm (HS256 is the default)
        .setIssuedAt()
        .setExpirationTime('1h') // Token expiration time (1 hour)
        .sign(new TextEncoder().encode(JWT_SECRET)); // Encode the secret using TextEncoder

    return jwt;
};

// Verify JWT using jose
export const verifyToken = async (token: string) => {
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET)); // Decode and verify the token
        return payload; // Return the decoded payload
    } catch (error) {
        console.error("Error verifying token:", error);
        return null; // Return null if verification fails
    }
};
