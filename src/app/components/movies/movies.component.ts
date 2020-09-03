import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderService } from '../../services/movie/gender.service';
import { Gender } from '../../models/movie/gender.model';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
  providers: [GenderService],
})
export class MoviesComponent implements OnInit {
  public movieForm: FormGroup;
  public disabled: boolean;
  public genders: Gender[] = [];
  public selectedMovieContro: any;

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GenderService
  ) {
    this.createForm();
    this.setMainComponentConfiguration();
  }

  ngOnInit(): void {
    this.genderService.getGenders().then((genders) => (this.genders = genders));
  }

  createForm() {
    this.movieForm = this.formBuilder.group({
      name: [''],
      gender: [''],
    });
  }

  setMainComponentConfiguration() {
    this.disabled = true;
  }

  setCaptureType(event) {
    //this.capture.requestDataQualityTypeId = event.value;
  }

  alertClick() {
    alert('you clicked me!');
  }
}
