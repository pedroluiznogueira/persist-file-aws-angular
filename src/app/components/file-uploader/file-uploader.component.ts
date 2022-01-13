import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from 'src/app/services/file-uploader.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  arquivosSelecionados?: FileList;
  arquivoUpload?: File;

  constructor(
    private fileUploaderService: FileUploaderService,
  ) { }

  ngOnInit(): void {
  }

  public arquivoSelecionado(event: any): void {
    this.arquivosSelecionados = event.target.files;
  }

  public uploadArquivo(): void {
    this.arquivoUpload = this.arquivosSelecionados!.item(0)!;
    this.fileUploaderService.pushFileToStorage(this.arquivoUpload!)
      .subscribe(
        event => {
          this.arquivosSelecionados = undefined;          
        }
      );
  }

}
