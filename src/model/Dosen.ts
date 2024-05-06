export default class Dosen {
    private nidn: string;
    private nama: string;
  
    constructor(nidn: string, nama: string) {
      this.nidn = nidn;
      this.nama = nama;
    }
  
    public getNIDN(): string {
      return this.nidn;
    }
  
    public getNama(): string {
      return this.nama;
    }
  }
  