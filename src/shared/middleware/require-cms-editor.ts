import { NextFunction, Request, Response } from 'express';

function splitHeader(value: string | undefined) {
    return (value ?? '')
        .split(',')
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean);
}

export function requireCmsEditor(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const roles = splitHeader(req.header('x-user-roles') ?? req.header('x-user-role'));
    const permissions = splitHeader(req.header('x-user-permissions'));

    const isSuperAdmin = roles.some((role) =>
        ['super_admin', 'super-admin', 'super admin'].includes(role),
    );
    const canEditCms = permissions.includes('cms:edit');

    if (isSuperAdmin || canEditCms) {
        return next();
    }

    if (roles.length === 0 && permissions.length === 0) {
        return res.status(401).json({ message: 'CMS editor credentials required' });
    }

    return res.status(403).json({ message: 'CMS edit permission required' });
}
