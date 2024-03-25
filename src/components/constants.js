const isProd = true;

export const API = isProd?
{
    BASE_URL: "https://srytal.vercel.app",
    TOKEN:""
}:{
    BASE_URL: "http://localhost:4000",
    TOKEN:""
}