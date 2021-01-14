import { UserRoleEnum } from 'src/app/shared/enum/user-role.enum';
import { TransplantOrgansEnum } from 'src/app/shared/enum/transplant-organs.enum';

export class UserModel {
    public jobs: string;
    public role: UserRoleEnum;
    public email: string;
    public password: string;
    public birthday: Date;
    public transplantOrgan: TransplantOrgansEnum;
    public transplantOrganDate: Date;
}


