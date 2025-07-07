const input = `?>DT/                                                          

  XCTYCRFLT/CL DTE TIME ST  FB/TKT DESIG   VALUE    NVB   NVA  

1  ATLDL2668U 25SEP 725AOK?UAWQA0MQ/GU00. ?....... ?25SEP?25SEP

2? MSP..VOID..............?.............. ?....... ?.... ?.... 

3? .....VOID..............?.............. ?....... ?.... ?.... 

4? .....VOID..............?.............. ?....... ?.... ?.... 

5? ...     SURCHG 1?......   2?......   3?......   4?......    

  CUR BASE        CUR EQV          CUR TOTAL TAX   CUR TOTAL   

6?USD?..263.43   ?.. ?........    ?USD?...35.06   ?USD?..298.49

7 FC?M        ENTER?      ?>DT*T              PTC A 01/01      

                                                         ?>1202
>+`;

// Extract only valid segment lines (not VOID)
const segmentLines = input.split("\n").filter(line =>
  /^\d\s|^\d\?/.test(line) && !/VOID/.test(line)
);

const segments = segmentLines.map(line => {
  // Match the fare basis as a single field (including / if present)
  // Example: 1  ATLDL2668U 25SEP 725AOK?UAWQA0MQ/GU00. ?....... ?25SEP?25SEP
  const matches = line.match(/\d+\s+([A-Z]{3})([A-Z]{2})(\d+)([A-Z])\s+(\d{2}[A-Z]{3})\s+[\dA-Z]+\?([A-Z0-9/]+)\./);
  if (!matches) return null;
  return {
    from: matches[1],
    airline: matches[2],
    flightNumber: matches[3],
    bookingClass: matches[4],
    departureDate: matches[5],
    fareBasis: matches[6], // as-is, e.g. UAWQA0MQ/GU00
  };
}).filter(segment => segment);

console.log(segments);



