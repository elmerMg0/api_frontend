import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Printer from './Printer';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10,
    flexDirection: 'column',
    fontSize: 12,
    width: '100%',
    minHeight: '100%',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    textAlign: 'center',
  },
  tableCellHeader: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    textAlign: 'right',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderColor: '#aaaaaa',
    fontSize: 12,
  },
});
const PrinterApp = () => {
  // Mock data
  const pedido = '001';
  const cajero = 'Juan Pérez';
  const fecha = '27/04/2023';
  const cliente = 'Ana Gómez';
  const items = [
    { id: 1, cant: 2, producto: 'Coca-Cola', precio: '$2.50' },
    { id: 2, cant: 1, producto: 'Papas fritas', precio: '$3.00' },
    { id: 3, cant: 3, producto: 'Hamburguesa', precio: '$5.00' },
  ];
  const total = '$19.50';


  const imprimirTicket = () => {
    const options = {
      landscape: false,
      marginsType: 1,
      pageSize: { width: 80, height: 297 }, // Tamaño personalizado de página para una impresora térmica de 80mm
      printBackground: true,
      printSelectionOnly: false,
      showDialog: true,
    };
    window.print(options);
  };


  const MyComponent = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <PDFViewer style={{ width: '100%', height:'100vh'}}>
         <Document>
      <Page size={{ width: 226.77, height: 'auto' }}>
        {/* Header */}
        <View style={styles.section}>
          <Text>{`Nro. Pedido: ${pedido}`}</Text>
          <Text>{`Cajero: ${cajero}`}</Text>
          <Text>{`Fecha: ${fecha}`}</Text>
          <Text>{`Cliente: ${cliente}`}</Text>
        </View>

        {/* Body */}
        <View style={styles.section}>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Cant.</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Producto</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Precio</Text>
          </View>
        </View>

        {/* Table Rows */}
        {items.map((item) => (
          <View style={styles.tableRow} key={item.id}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.cant}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.producto}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.precio}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <Text>{`Total: ${total}`}</Text>
    </View>
  </Page>
  </Document>
  </PDFViewer>
      </div>
    );
  });


  const ticketRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });

  return (
    <div>
     {/*  <PDFViewer
      style={{width:'100%', height:'100vh'}}
        document={<Printer pedido={pedido} cajero={cajero} fecha={fecha} cliente={cliente} items={items} total={total} />}
        fileName={`ticket-${pedido}.pdf`}
      > */}
      {/*   {({ blob, url, loading, error }) =>
          loading ? 'Generando PDF...' : 'Descargar PDF'
        }
        <Printer pedido={pedido} cajero={cajero} fecha={fecha} cliente={cliente} items={items} total={total} />
      </PDFViewer> */}
      <MyComponent ref={ticketRef} />
      <button onClick={() => imprimirTicket()}>Imprimir</button>
     {/*  <Printer ref={ticketRef}  pedido={pedido} cajero={cajero} fecha={fecha} cliente={cliente} items={items} total={total} /> */}
    {/*   <Printer pedido={pedido} cajero={cajero} fecha={fecha} cliente={cliente} items={items} total={total} /> */}
    </div>
  );
};

export default PrinterApp;