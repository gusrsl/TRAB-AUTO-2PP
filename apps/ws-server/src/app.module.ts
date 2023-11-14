import { ResultadoExamenTypeORM } from './resultadoexamen/entities/resultadoexamen.entity';
import { RecetaMedicaTypeORM } from './recetamedica/entities/recetamedica.entity';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { RepostajeModule } from './repostaje/repostaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
// import { ReportesModule } from './reportes/reportes.module';
// import { UnidadesModule } from './unidades/unidades.module';


import { MongooseModule } from '@nestjs/mongoose';
import { MedicoModule } from './medico/medico.module';
// import { Repostaje } from './repostaje/entities/repostaje.entity';
// import { Reporte } from './reportes/entities/reporte.entity';
// import { Unidade } from './unidades/entities/unidade.entity';

import { MedicoTypeORM } from './medico/entities/medico.entity';
import { CitaModule } from './cita/cita.module';
import { ConsultorioModule } from './consultorio/consultorio.module';
import { EnfermedadModule } from './enfermedad/enfermedad.module';
import { HistorialmedicoModule } from './historialmedico/historialmedico.module';
import { LicenciaModule } from './licencia/licencia.module';
import { LaboratorioModule } from './laboratorio/laboratorio.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { PacienteModule } from './paciente/paciente.module';
import { RecetamedicaModule } from './recetamedica/recetamedica.module';
import { ResultadoexamenModule } from './resultadoexamen/resultadoexamen.module';
import { CitaTypeORM } from './cita/entities/cita.entity';
import { ConsultorioTypeORM } from './consultorio/entities/consultorio.entity';
import { EnfermedadTypeORM } from './enfermedad/entities/enfermedad.entity';
import { HistorialMedicoTypeORM } from './historialmedico/entities/historialmedico.entity';
import { LaboratorioTypeORM } from './laboratorio/entities/laboratorio.entity';
import { LicenciaTypeORM } from './licencia/entities/licencia.entity';
import { MedicamentoTypeORM } from './medicamento/entities/medicamento.entity';
import { PacienteTypeORM } from './paciente/entities/paciente.entity';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/'),
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "Gusrod.2023",
      "database": "medic-db",
      "entities": [
        MedicoTypeORM,
        CitaTypeORM,
        ConsultorioTypeORM,
        EnfermedadTypeORM,
        HistorialMedicoTypeORM,
        LaboratorioTypeORM,
        LicenciaTypeORM,
        MedicamentoTypeORM,
        PacienteTypeORM,
        RecetaMedicaTypeORM,
        ResultadoExamenTypeORM
      ],
      "synchronize": true,
      "logging": true
    }),
    MedicoModule,
    CitaModule,
    ConsultorioModule,
    EnfermedadModule,
    HistorialmedicoModule,
    LicenciaModule,
    LaboratorioModule,
    MedicamentoModule,
    PacienteModule,
    RecetamedicaModule,
    ResultadoexamenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
