export default class Mahasiswa {
  private npm: string;
  private nama: string;
  private ipk: number;

  constructor(npm: string, nama: string, ipk: number) {
    this.npm = npm;
    this.nama = nama;
    this.ipk = ipk;
  }

  public getNPM(): string {
    return this.npm;
  }

  public getNama(): string {
    return this.nama;
  }

  public getIPK(): number {
    return this.ipk;
  }
}
