import { Component, QueryList, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { AlertController, Platform } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any;
  image = '';

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    public photoService: PhotoService,
    public alertController: AlertController,
    public platform: Platform,
    private barcodeScanner: BarcodeScanner,
    private formBuilder: FormBuilder
  ) {
    // this.loadWorker();
  }
  ngOnInit()
  {
    this.validations_form = this.formBuilder.group({
      section: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      row: new FormControl('', Validators.compose
      ([
        Validators.required
      ]))
    });
  }

  validation_messages = {
    'section': [
      { type: 'required', message: 'Section is required.'}
    ],
    'row' : [
      {type: 'required', message: 'Row is required.'}
    ]
  };

  // Hard-wired array to mock a database until we connect to an
  // actual database
  barcode_mapping = [
    '0821858040', 'LORC: Left Orchestra', 'D', '35',
    '0821848687', 'LORC: Left Orchestra', 'E', '36',
    '0821859186', 'LORC: Left Orchestra', 'D', '36',
    '0821849369', 'LORC: Left Orchestra', 'E', '37',
  ]

  seat = {
    section: '',
    row: '',
    seatNum: ''
  }

  sectionView: any;

  sections = [
    //'RORC', 'LORC', 'RGTR', 'LGTR', 'RBAL', 'LBAL', 'HC'
    'RORC: Right Orchestra', 'LORC: Left Orchestra', 'RGTR: Right Grand Tier', 'LGTR: Left Grand Tier',
    'RBAL: Right Balcony', 'LBAL: Left Balcony', 'HCP: ADA Accessible'
  ]

  rows: string[];

  ORCrows = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'
  ]
  GTRrows = [
    'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL'
  ]
  BALrows = [
    'AAA', 'BBB', 'CCC', 'DDD'
  ]

  seats: string[];

  Aseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22'
  ]
  Bseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28'
  ]
  Cseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
  ]
  Dseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'
  ]
  Eseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
  ]
  Fseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43'
  ]
  Gseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44'
  ]
  Hseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
  ]
  Iseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53'
  ]
  Jseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53'
  ]
  Kseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57'
  ]
  Lseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
  ]
  Mseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
  ]
  Nseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63'
  ]
  Oseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64'
  ]
  Pseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65'
  ]
  Qseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67'
  ]
  Rseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67'
  ]
  Sseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66',
  ]
  Tseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70'
  ]
  Useats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72'
  ]
  AAseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66',
  ]
  BBseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70'
  ]
  CCseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69',
  ]
  DDseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72'
  ]
  EEseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73'
  ]
  FFseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70'
  ]
  GGseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71'
  ]
  HHseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72'
  ]
  IIseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69'
  ]
  JJseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71'
  ]
  KKseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71'
  ]
  LLseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69'
  ]
  AAAseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73'
  ]
  BBBseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
  ]
  CCCseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70'
  ]
  DDDseats = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74'
  ]
  HCPseats = ['HCP Left', 'HCP Right']

  goToSeatDescription() {
    let navigationExtras: NavigationExtras = {
      state: {
        seat: this.seat
      }
    };
    this.router.navigate(['seat-description'], navigationExtras);
  }

  async showSectionView() {
    if(this.seat.section=='') {
      const alert = await this.alertController.create({
        header: 'Section Required',
        message: 'Please input a section to see the section view',
        buttons: ['CLOSE']
      });
  
      await alert.present();

    } else {
      this.generateSectionView();
      const alert = await this.alertController.create({
        header: 'View from Section ' + this.seat.section,
        message: this.sectionView,
        buttons: ['CLOSE']
      });

      await alert.present();
    }
  }

  setRows(inputSection: string) {
    if (this.seat.row != null) {
      this.removeRowSelection();
    }
    //if(inputSection=="RORC" || inputSection=="LORC") {
    if(inputSection=='RORC: Right Orchestra' || inputSection=='LORC: Left Orchestra') {
      this.rows = this.ORCrows;
    } //else if(inputSection=="RGTR" || inputSection=="LGTR") {
    else if(inputSection=='RGTR: Right Grand Tier' || inputSection=='LGTR: Left Grand Tier') {
      this.rows = this.GTRrows;
    } //else if(inputSection=="RBAL" || inputSection=="LBAL") {
    else if(inputSection=='RBAL: Right Balcony' || inputSection=='LBAL: Left Balcony') {
      this.rows = this.BALrows;
    } else {
      this.rows = ['HCP: ADA Accessible'];
    }
  }

  setSeats(inputRow: string) {
    if (this.seat.seatNum != null) {
      this.removeSeatSelection();
    }
    if (inputRow == "A") {
      this.seats = this.Aseats;
    } else if (inputRow == "B") {
      this.seats = this.Bseats;
    } else if (inputRow == "C") {
      this.seats = this.Cseats;
    } else if (inputRow == "D") {
      this.seats = this.Dseats;
    } else if (inputRow == "E") {
      this.seats = this.Eseats;
    } else if (inputRow == "F") {
      this.seats = this.Fseats;
    } else if (inputRow == "G") {
      this.seats = this.Gseats;
    } else if (inputRow == "H") {
      this.seats = this.Hseats;
    } else if (inputRow == "I") {
      this.seats = this.Iseats;
    } else if (inputRow == "J") {
      this.seats = this.Jseats;
    } else if (inputRow == "K") {
      this.seats = this.Kseats;
    } else if (inputRow == "L") {
      this.seats = this.Lseats;
    } else if (inputRow == "M") {
      this.seats = this.Mseats;
    } else if (inputRow == "N") {
      this.seats = this.Nseats;
    } else if (inputRow == "O") {
      this.seats = this.Oseats;
    } else if (inputRow == "P") {
      this.seats = this.Pseats;
    } else if (inputRow == "Q") {
      this.seats = this.Qseats;
    } else if (inputRow == "R") {
      this.seats = this.Rseats;
    } else if (inputRow == "S") {
      this.seats = this.Sseats;
    } else if (inputRow == "T") {
      this.seats = this.Tseats;
    } else if (inputRow == "U") {
      this.seats = this.Useats;
    } else if (inputRow == "AA") {
      this.seats = this.AAseats;
    } else if (inputRow == "BB") {
      this.seats = this.BBseats;
    } else if (inputRow == "CC") {
      this.seats = this.CCseats;
    } else if (inputRow == "DD") {
      this.seats = this.DDseats;
    } else if (inputRow == "EE") {
      this.seats = this.EEseats;
    } else if (inputRow == "FF") {
      this.seats = this.FFseats;
    } else if (inputRow == "GG") {
      this.seats = this.GGseats;
    } else if (inputRow == "HH") {
      this.seats = this.HHseats;
    } else if (inputRow == "II") {
      this.seats = this.IIseats;
    } else if (inputRow == "JJ") {
      this.seats = this.JJseats;
    } else if (inputRow == "KK") {
      this.seats = this.KKseats;
    } else if (inputRow == "LL") {
      this.seats = this.LLseats;
    } else if (inputRow == "AAA") {
      this.seats = this.AAAseats;
    } else if (inputRow == "BBB") {
      this.seats = this.BBBseats;
    } else if (inputRow == "CCC") {
      this.seats = this.CCCseats;
    } else if (inputRow == "DDD") {
      this.seats = this.DDDseats;
    } else if (inputRow=="HCP: ADA Accessible") {
      this.seats = this.HCPseats;
    } else {
      this.seats = ['Invalid Section/Row']
    }
  }

  removeRowSelection() {
    this.seat.row = null;
    this.seat.seatNum = null;
  }

  removeSeatSelection() {
    this.seat.seatNum = null;
  }

  // Alert window for good barcode scan
  async confirmation() {
    const alert = await this.alertController.create({
      header: 'Scan Confirmation',
      message: '<b> Is this the information found on your ticket? </b> <br/>' + 
               'Section: ' + this.seat.section + '<br/> Row: ' + this.seat.row 
                + '<br/> Seat: ' + this.seat.seatNum,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('CONFIRM CANCEL');
          }
        }, 
        {
          text: 'Find Seat',
          handler: () => {
            console.log('CONFIRM OK');
            this.goToSeatDescription();
          }
        }
      ]
    });

    await alert.present();
  }

  // Alert window for an invalid scan
  async invalidScan() {
    const alert = await this.alertController.create({
      header: 'Scan Ticket Error',
      message: 'Invalid Scan Provided',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('CONFIRM CANCEL');
          }
        }, {
          text: 'Try Scan Again',
          handler: () => {
            console.log('CONFIRM OK');
            this.scanBarcode();
          }
        }
      ]
    });

    await alert.present();
  }

  // Scans barcode from ticket
  async scanBarcode() {
    if (!this.platform.is('cordova'))
      this.notCordova();

    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      prompt: 'Place ticket barcode inside of scan area',
      // formats: 'CODE_39',
      orientation: 'portrait',
      resultDisplayDuration: 0    
    };
    
    this.data = null;
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData.text;
      console.log(this.data);
      this.process_barcode();
    }).catch(err => {
      console.log('Error', err);
    });
  }

  // Processes text from barcode
  process_barcode() {
    for (let i = 0; i < this.barcode_mapping.length; i++) {
      if (this.barcode_mapping[i] == this.data) {
        this.seat.section = this.barcode_mapping[i + 1];
        this.setRows(this.seat.section);
        this.seat.row = this.barcode_mapping[i + 2];
        this.setSeats(this.seat.row);
        this.seat.seatNum = this.barcode_mapping[i + 3];
        this.confirmation();
        return;
      }
    }
    this.invalidScan();
  }

  // 'RORC: Right Orchestra', 'LORC: Left Orchestra', 'RGTR: Right Grand Tier', 'LGTR: Left Grand Tier',
  // 'RBAL: Right Balcony', 'LBAL: Left Balcony', 'HCP: ADA Accessible'

  generateSectionView() {
    if(this.seat.section=='RORC: Right Orchestra' || this.seat.seatNum == 'HCP Right') {
      this.sectionView='<img src="../../assets/img/RORC.jpg"/>';
    } else if(this.seat.section=='LORC: Left Orchestra' || this.seat.seatNum == 'HCP Left') {
      this.sectionView='<img src="../../assets/img/LORC.jpg"/>';
    } else if(this.seat.section=='RGTR: Right Grand Tier') {
      this.sectionView='<img src="../../assets/img/RGTR.jpg"/>';
    } else if(this.seat.section=='LGTR: Left Grand Tier') {
      this.sectionView='<img src="../../assets/img/LGTR.jpg"/>';
    } else if(this.seat.section=='RBAL: Right Balcony') {
      this.sectionView='<img src="../../assets/img/RBAL.jpg"/>';
    } else if(this.seat.section=='LBAL: Left Balcony') {
      this.sectionView='<img src="../../assets/img/LBAL.jpg"/>';
    } else {
      this.sectionView='<img src="../../assets/img/uofsclogo.jpg"/>';
    }
  }

  // Alert for barcode scanner not working on ionic serve
  async notCordova() {
    const alert = await this.alertController.create({
      header: 'Barcode Scanner only works on a device, not on ionic serve',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('CONFIRM OK');
          }
        }
      ]
    });

    await alert.present();
  }

}
