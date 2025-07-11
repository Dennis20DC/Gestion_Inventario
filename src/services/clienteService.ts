
import { PrismaClient } from '@prisma/client';
import { ICliente } from '../models/cliente';
import { toPrismaDetalleVenta } from "../mappers/detalleVenta.mapper";

const prisma = new PrismaClient();

export const listarClientes = async () => {
    console.log('clienteService::listarClientes');
    try {
        const clientes = await prisma.clientes.findMany({
            where: { estado_auditoria: '1' },
            orderBy: { id_cliente: 'asc' },
        });
        return clientes;
    } catch (error: any) {
        console.error('Error al listar clientes:', error);
        throw new Error(`Error al listar clientes: ${error.message}`);
    }
};
export const obtenerCliente = async (id: number) => {
    console.log('clienteService::obtenerCliente con id');
    try {
        const cliente = await prisma.clientes.findUnique({
            where: { id_cliente: id }
        });
        return cliente;
    } catch (error: any) {
        console.error('Error al obtener cliente:', error);
        throw new Error(`Error al obtener cliente: ${error.message}`);
    }
};

export const insertarCliente = async (cliente: ICliente) => {
    console.log('clienteService::insertarCliente');
    try {
        const nuevoCliente = await prisma.clientes.create({
            data: {
                nombre: cliente.nombre,
                telefono: cliente.telefono ?? null,
                correo: cliente.correo ?? null,
                direccion: cliente.direccion ?? null,
                estado_auditoria: '1',
                fecha_creacion: new Date(),
            }
        });
        return nuevoCliente;
    } catch (error: any) {
        console.error('Error al insertar cliente:', error);
        throw new Error(`Error al insertar cliente: ${error.message}`);
    }
}

export const modificarCliente = async (id_cliente: number, cliente: ICliente) => {
    console.log(`clienteService::modificarCliente con id ${id_cliente}`);
    try {
        const modificar = await prisma.clientes.update({
            where: { id_cliente },
            data:  cliente
            
        });
        return modificar;
    } catch (error: any) {
        console.error('Error al modificar cliente:', error);
        throw new Error(`Error al modificar cliente: ${error.message}`);
    }
};
export const eliminarCliente = async (id: number) => {
    console.log(`clienteService::eliminarCliente con id ${id}`);
    try {
        const clienteEliminado = await prisma.clientes.delete({
            where: { id_cliente: id }
        });
        return clienteEliminado;
    } catch (error: any) {
        console.error('Error al eliminar cliente:', error);
        throw new Error(`Error al eliminar cliente: ${error.message}`);
    }
};