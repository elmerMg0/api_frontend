import React from 'react';
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

// Create component
const Printer = ({ ref, pedido, cajero, fecha, cliente, total, items }) => {
  return (
    <Document ref={ref}>
      <Page size="80mm" style={styles.page}>
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
)}

export default Printer;