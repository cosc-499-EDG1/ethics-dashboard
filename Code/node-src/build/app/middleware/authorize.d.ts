import jwt from 'express-jwt';
declare function authorize(): (jwt.RequestHandler | ((req: any, res: any, next: any) => Promise<any>))[];
export { authorize };
