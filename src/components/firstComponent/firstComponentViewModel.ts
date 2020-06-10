import { UserModel } from "../../model/userModel";

export class FirstComponentViewModel implements IFirstComponentViewModel {
    
    model?: UserModel;

    fetchUser() {
        this.model = new UserModel('tiago', 'tiagoo@ciant.com')
    }

    updateUser(withUser: UserModel): Boolean {
        this.model = withUser;
        return true;
    }
}

interface IFirstComponentViewModel {
    model?: UserModel;
    fetchUser(): void;
    updateUser(withUser: UserModel): Boolean;
}