import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/models/user.model';
import { TransplantOrgansEnum } from 'src/app/shared/enum/transplant-organs.enum';
import { UserRoleEnum } from 'src/app/shared/enum/user-role.enum';
import { RegistryService } from 'src/app/modules/registration/services/registry.service';

@Component({
  selector: 'app-registration-main',
  templateUrl: './registration-main.component.html',
  styleUrls: ['./registration-main.component.scss']
})
export class RegistrationMainComponent implements OnInit {
  public userRolesList: UserRoleEnum[] = [ UserRoleEnum.DOCTOR, UserRoleEnum.PATIENT];
  public transplantOrganList: TransplantOrgansEnum[] = [ TransplantOrgansEnum.LIVER, TransplantOrgansEnum.HEART, TransplantOrgansEnum.KIDNEYS];

  public firstStepFormGroup: FormGroup = new FormGroup({});
  public secondStepIsDoctorFormGroup: FormGroup = new FormGroup({});
  public secondStepIsPatientFormGroup: FormGroup = new FormGroup({});

  public firstStepRoleControl: FormControl = new FormControl('', [Validators.required]);
  public firstStepEmailControl: FormControl = new FormControl('', [Validators.required]);
  public firstStepPasswordControl: FormControl = new FormControl('', [Validators.required]);

  public secondStepJobsControl: FormControl = new FormControl('', [ Validators.required]);
  public secondStepBirthdayControl: FormControl = new FormControl('', [Validators.required]);
  public secondStepTransplantOrganControl: FormControl = new FormControl('', [Validators.required]);
  public secondStepTransplantOrganDateControl: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private registryService: RegistryService,
  ) {}

  public ngOnInit(): void {
    this.firstStepFormGroup = new FormGroup({
      role: this.firstStepRoleControl,
      email: this.firstStepEmailControl,
      password: this.firstStepPasswordControl,
    });
    this.secondStepIsPatientFormGroup = new FormGroup({
      birthday: this.secondStepBirthdayControl,
      transplantOrgan: this.secondStepTransplantOrganControl,
      transplantOrganDate: this.secondStepTransplantOrganDateControl,
    });
    this.secondStepIsDoctorFormGroup = new FormGroup({
      jobs: this.secondStepJobsControl,
    });
  }

  public registryAction(): void {
    const userModel: UserModel = {
      jobs: this.secondStepJobsControl.value,
      role: this.firstStepRoleControl.value,
      email: this.firstStepEmailControl.value,
      password: this.firstStepPasswordControl.value,
      birthday: this.secondStepBirthdayControl.value,
      transplantOrgan: this.secondStepTransplantOrganControl.value,
      transplantOrganDate: this.secondStepTransplantOrganDateControl.value,
    };
    this.registryService.registry(userModel);
  }

}
