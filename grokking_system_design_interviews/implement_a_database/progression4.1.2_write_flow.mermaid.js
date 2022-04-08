sequenceDiagram
  User ->> Database API: Write k,v
  par Write to Active Segment
    Database API ->> Active Segment: Insert k,v
  and Append to Backup
    Database API ->> Active Segment Backup: Append k,v
  end
  Active Segment -->> Database API: ACK
  Active Segment Backup -->> Database API: ACK
  Database API -->> User: OK
