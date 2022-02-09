declare class AccountController {
    authenticate: (req: any, res: any, next: any) => Promise<void>;
    create: (req: any, res: any, next: any) => Promise<void>;
    getClassGroups: (req: any, res: any, next: any) => Promise<any>;
    findAll: (req: any, res: any, next: any) => any;
    findOne: (req: any, res: any, next: any) => any;
    /**
     * For account security, check the type of req.account in these functions.
     */
    update: (req: any, res: any, next: any) => Promise<any>;
    delete: (req: any, res: any, next: any) => any;
}
declare const _default: AccountController;
export default _default;
