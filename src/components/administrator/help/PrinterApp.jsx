import React from "react";
import ReactToPrint from "react-to-print";
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    flexDirection: "column",
    width: "100%",
  },
  section: {
    padding: 10,
    flexGrow: 1,
    fontSize: 13,
  },
  table: {
    display: "table",
    width: "auto",
    height: "auto",
    borderStyle: "solid",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    textAlign: "center",
  },
  tableColHeader: {
    width: "33%",
    borderStyle: "solid",
    textAlign: "center",
    fontWeight: "bold",
  },
  tableCol: {
    width: "33%",
    textAlign: "center",
  },
  tableColPrice: {
    textAlign: "right",
    width: "33%",
  },
  tableCellHeader: {
    marginTop: 5,
    fontSize: 12,
  },
  tableCell: {
    marginTop: 5,
    fontSize: 12,
  },
  footer: {
    padding: 10,
    textAlign: "right",
    fontSize: 12,
  },
});

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="viewer-print" style={{ position: "absolute" }}>
        <div style={{ height: "calc(100vh - 300px)" }}>
          <PDFViewer style={{ width: "100%", height: "100%" }}>
            <Document>
              <Page size={{ width: 226.77, height: "auto" }}>
                {/* Header ticker */}
                <View style={styles.section}>
                  <Text>Ticket: {/* {saleNumber.numero_pedido} */}</Text>
                  <Text>Usuario:{/*  {username} */}</Text>
                  <Text>Fecha: {/* {`${date}  ${hour}`} */} </Text>
                  <Text>Cliente: {/* {customer} */}</Text>
                </View>

                {/* Table body */}
                <View style={styles.section}>
                  <View>
                    <View style={styles.tableRow}>
                      <View style={styles.tableCol}>
                        <Text>Cant.</Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text>Producto</Text>
                      </View>
                      <View style={styles.tableColPrice}>
                        <Text>Precio</Text>
                      </View>
                    </View>
                    {/* Table rows */}
                    {/* {
                          items && items.length > 0 && 
                          items.map( prod => (
                              <View key={prod.id} style={styles.tableRow}>
                                  <View style={styles.tableCol}>
                                      <Text>{prod.cantidad}</Text>
                                  </View>
                                  <View style={styles.tableCol}>
                                      <Text>{prod.nombre}</Text>
                                  </View>
                                  <View style={styles.tableColPrice}>
                                      <Text>{prod.precio_venta}</Text>
                                  </View>
                              </View>
                          ))} */}
                  </View>
                </View>
                {/* Footer */}
                <View style={styles.footer}>
                  <Text>{`Total: `}</Text>
                  <Text>Pago: {/* {saleNumber.cantidad_cancelada} */}</Text>
                  <Text>
                    Vuelto:{" "}
                    {/* {saleNumber.cantidad_cancelada - saleNumber.cantidad_total} */}
                  </Text>
                  <Text>Tipo Pago: {/* {saleNumber.tipo_pago} */}</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </div>
    );
  }
}

class PrintButton extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Imprimir</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintButton;
