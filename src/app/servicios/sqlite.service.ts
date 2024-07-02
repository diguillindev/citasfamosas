import { Injectable } from '@angular/core';
import { Frase } from '../modelo/citasfamosas';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
   
  sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteDBConnection;

  plataforma: string = ""


  DB_NAME: string ="citaslist";
  DB_ENCRIPTADA: boolean = false;
  DB_MODE: string = "no-encryption";
  DB_VERSION: number = 1 ;
  DB_READ_ONLY: boolean = false;
  DB_SQL_TABLAS: string  = 'CREATE TABLE IF NOT EXIST citalist (id INTEGER PRIMARY KEY AUTOINCREMENT, mensaje TEXT NOT NULL, autor TEXT NOT NULL ); ';  
  



  constructor() { }

  private async _iniciarPluginweb() : Promise<void> {
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if( jeepSqliteEl != null ) {      
      await this.sqlite.initWebStore()            
    }
  }

  async iniciarPlugin() {    
    this.plataforma = Capacitor.getPlatform()
    if(this.plataforma == "web") {
       this._iniciarPluginweb()
    }
    await this.abrirConexion()
    await this.db.execute(this.DB_SQL_TABLAS)             
}

async abrirConexion() {                    
  const ret = await this.sqlite.checkConnectionsConsistency() 
  const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
  if(ret.result && isConn) {
    this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)      
  } else {
    this.db = await this.sqlite.createConnection(
      this.DB_NAME,
      this.DB_ENCRIPTADA,
      this.DB_MODE,
      this.DB_VERSION,
      this.DB_READ_ONLY
    )
  }
  await this.db.open()
}

  agregarFrase(): Frase [] {
      const sql = "SELECT "
      return []
  }


}
