import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batch-upload',
  templateUrl: './batch-upload.component.html',
  styleUrls: ['./batch-upload.component.css']
})
export class BatchUploadComponent {
  // requiredFileType: any
  // uploadProgress: any
  // fileName = '';

  // constructor(private http: HttpClient) {}

  // onFileSelected(event: any) {

  //     const file: File = event.target.files[0];

  //     if (file) {

  //         this.fileName = file.name;

  //         const formData = new FormData();

  //         formData.append("thumbnail", file);

  //         const upload$ = this.http.post("/api/v1/files", formData);

  //         upload$.subscribe();
  //     }
  // }

  // cancelUpload() {
  //   console.log("Cancel has not been effected completely");
  //   alert('Cancelled, though')
  // }
  
  
  
  // folderForm: FormGroup;

  // constructor() {
  //   this.folderForm = new FormGroup({
  //     folderName: new FormControl(),
  //     folderUpload: new FormControl()
  //   });
  // }

  // get folderName() {
  //   return this.folderForm.get('folderName');
  // }

  // get folderUpload() {
  //   return this.folderForm.get('folderUpload');
  // }

  // handleFileInput(event: Event) {
  //   const files = (event.target as HTMLInputElement).files;
  //   // Handle file input logic here
  // }

  // uploadFolder() {
  //   // Handle folder upload logic here
  // }


  // // folderUploadForm: FormGroup;

  // // constructor() {
  // //   this.folderUploadForm = new FormGroup({
  // //     folderControl: new FormControl()
  // //   });
  // // }

  // onFolderSelect(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const files = inputElement.files;

  //   // Use the 'files' array to access the selected folders/files
  //   console.log(files);
  // }

}











  //   folderUploadForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.folderUploadForm = this.formBuilder.group({
//       folder: ['', Validators.required]
//     });
//   }

//   onFolderSelected(event: Event): void {
//     const files: FileList = (event.target as HTMLInputElement).files;
//     if (files.length > 0) {
//       const selectedFolder: File = files[0];
//       // Perform actions with the selected folder
//       console.log(selectedFolder);
//     }
//   }

//   onSubmit(): void {
//     if (this.folderUploadForm.valid) {
//       const folder: File = this.folderUploadForm.get('folder').value;
//       // Perform actions with the selected folder
//       console.log(folder);
//     }
//   }
// }
