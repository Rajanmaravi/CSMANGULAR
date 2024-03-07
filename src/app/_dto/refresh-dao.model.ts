export class RefreshDaoModel
{
    token: string | null = null;
    refreshToken: string | null = null;
    expirationTimeInHours: number | null = null;
    tokenExpirationDay: Date  | null = null;
    userRole: string | null = null;
    expirationTimestamp: number | null = null;
}