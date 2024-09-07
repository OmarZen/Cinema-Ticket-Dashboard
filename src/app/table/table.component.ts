import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { TableModule } from 'primeng/table';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faFilter, faPlus, faDownload, faTicket } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MD5 } from 'crypto-js'; // Import md5 for hashing

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  isOn: boolean = true;

  ngOnInit() {
    console.log('Tickets data:', this.tickets);
  }

  tickets = [
    {
      id: 1,
      name: 'تذكرة رقم 45.pdf', // Updated field name to match template
      ticketNumber: 'C-101',
      date: '2024-09-06',
      file: 'path-to-file', // Make sure this path is valid
      user: {
        avatar: '',
        name: 'أحمد محمد',
        phone: '01001234567',
      },
      purchaseCount: 'مرة واحدة',
      persons: 5,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: '$150'
    },
    {
      id: 2,
      name: 'تذكرة رقم 46.pdf', // Updated field name to match template
      ticketNumber: 'C-102',
      date: '2024-09-07',
      file: 'path-to-file2', // Make sure this path is valid
      user: {
        avatar: '',
        name: 'مروان سمير',
        phone: '01234567890',
      },
      purchaseCount: 'مرة واحدة',
      persons: 3,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: '$100'
    }
    // Add more tickets as needed
  ];


  paginatorRows: number = 5;
  paginatorFirst: number = 0;

  rowsPerPageOptions = [5, 10, 15, 20, 25, 30];

  changePageSize(event: number) {
    this.paginatorRows = event;
    this.paginatorFirst = 0; // Reset to first page
  }
  constructor(private cdr: ChangeDetectorRef, library: FaIconLibrary) {
    library.addIcons(faSearch, faFilter, faPlus, faDownload,faTicket);
  }

  // Call this method after updating tickets array
updateData() {
  this.tickets = [...this.tickets]; // Force change detection
  this.cdr.detectChanges();
}

  toggleSwitch() {
    this.isOn = !this.isOn;
    // Update toggle switch style based on isOn value
  }

  downloadFile(filePath: string) {
    // Assuming filePath is a URL or relative path to the file
    fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, filePath.split('/').pop()); // Use file name from path
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  }


  getInitials(name: string): string {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    return initials.substring(0, 2); // Take the first 2 initials
  }

  getColorForName(name: string): string {
    // Use MD5 hash to generate a consistent color
    const hash = MD5(name).toString();
    const hue = parseInt(hash.substring(0, 6), 16) % 360;
    return `hsl(${hue}, 70%, 70%)`;
  }

}
