export default class Ruangan {
    private kode: string;
    private nama: string;
  
    constructor(kode: string, nama: string) {
      this.kode = kode;
      this.nama = nama;
    }
  
    public getKode(): string {
      return this.kode;
    }
  
    public getNama(): string {
      return this.nama;
    }
  }
  