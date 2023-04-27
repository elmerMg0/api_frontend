const ReportTableRow = ( { sale }) => {
  return (
    <tr>
        <td>{sale.fecha}</td>
        <td>{sale.nombres}</td>
        <td>{sale.total}</td>
    </tr>
  )
}
export default ReportTableRow