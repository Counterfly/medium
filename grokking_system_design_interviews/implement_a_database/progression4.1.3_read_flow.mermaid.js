sequenceDiagram
  User ->> Database API: Read k1
  Database API ->> Active Segment: lookup k1
  Active Segment -->> Database API: null
  Database API ->> Disk Segments: lookup k1
  Disk Segments ->> Disk Segments: perform binary search for k1
  Disk Segments -->> Database API: k1,v1
  Database API -->> User: k1,v1
