import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AlbumService } from "../../services/album.service";
import { CommonModule } from "@angular/common";

declare var bootstrap: any;


@Component({
  selector: 'app-album-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './album-form.component.html',
  styleUrl: './album-form.component.css'
})
export class AlbumFormComponent {
  albumForm: FormGroup;
  albumCreated: boolean = false;
  confirmationModal: any;
  

  constructor(private fb: FormBuilder, private albumService: AlbumService) {
    this.albumForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cover: ['', [Validators.required, Validators.pattern('https?://.+')]], 
      releaseDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      genre: ['', Validators.required],
      recordLabel: ['', Validators.required]
    });
}

ngOnInit(): void {  
  const modalElement = document.getElementById('confirmationModal');
  this.confirmationModal = new bootstrap.Modal(modalElement!);
}

onSubmit() {
  if (this.albumForm.valid) {
    this.albumService.createAlbum(this.albumForm.value).subscribe(
      response => {
        console.log('Álbum creado exitosamente', response);
        this.albumCreated = true;
        this.albumForm.reset();  
        this.confirmationModal.show();  
      },
      error => {
        console.error('Error al crear el álbum', error);
      }
    );
  }
}
}