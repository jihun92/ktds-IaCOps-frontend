export let vpc : string = 'resource "aws_vpc" "iacops-demo-vpc" {\n' +
    '    cidr_block = "10.0.0.0/16"\n' +
    '}\n';

export let publicSubnet1 : string = 'resource "aws_subnet" "iacops-demo-web-subnet-1" {\n' +
    '    vpc_id                  = aws_vpc.iacops-demo-vpc.id\n' +
    '    cidr_block              = "10.0.1.0/24"\n' +
    '    availability_zone       = "ap-northeast-2a"\n' +
    '    map_public_ip_on_launch = true\n' +
    '}\n';

export let publicSubnet2 : string = 'resource "aws_subnet" "iacops-demo-web-subnet-2" {\n' +
    '    vpc_id                  = aws_vpc.iacops-demo-vpc.id\n' +
    '    cidr_block              = "10.0.2.0/24"\n' +
    '    availability_zone       = "ap-northeast-2c"\n' +
    '    map_public_ip_on_launch = true\n' +
    '}\n';

export let privateSubnet : string = 'resource "aws_subnet" "iacops-demo-was-subnet-1" {\n' +
    '    vpc_id                  = aws_vpc.iacops-demo-vpc.id\n' +
    '    cidr_block              = "10.0.11.0/24"\n' +
    '    availability_zone       = "ap-northeast-2a"\n' +
    '    map_public_ip_on_launch = true\n' +
    '}\n';

export let dbSubnet : string = 'resource "aws_subnet" "iacops-demo-database-subnet-1" {\n' +
    '    vpc_id            = aws_vpc.iacops-demo-vpc.id\n' +
    '    cidr_block        = "10.0.21.0/24"\n' +
    '    availability_zone = "ap-northeast-2a"\n' +
    '    map_public_ip_on_launch = true\n' +
    '}\n';

export let gateway : string = 'resource "aws_internet_gateway" "iacops-demo-igw" {\n' +
    '    vpc_id = aws_vpc.iacops-demo-vpc.id\n' +
    '    tags = {\n' +
    '        User = "Terraform"\n' +
    '        Name = "Demo IGW"\n' +
    '    }\n' +
    '}\n';

export let webServer1 : string = 'resource "aws_instance" "web-1" {\n' +
    '    ami                    = "ami-0e340bb58640dff67"\n' +
    '    instance_type          = "t2.micro"\n' +
    '    availability_zone      = "ap-northeast-2a"\n' +
    '    vpc_security_group_ids = [aws_security_group.webserver-sg.id]\n' +
    '    subnet_id              = aws_subnet.iacops-demo-web-subnet-1.id\n' +
    '    tags = {\n' +
    '        User = "Terraform"\n' +
    '        Name = "WEB-Server1-IaCOps"\n' +
    '    }\n' +
    '}\n';

export let webServer2 : string = 'resource "aws_instance" "web-2" {\n' +
    '    ami                    = "ami-0e340bb58640dff67"\n' +
    '    instance_type          = "t2.micro"\n' +
    '    availability_zone      = "ap-northeast-2c"\n' +
    '    vpc_security_group_ids = [aws_security_group.webserver-sg.id]\n' +
    '    subnet_id              = aws_subnet.iacops-demo-web-subnet-2.id\n' +
    '    tags = {\n' +
    '        User = "Terraform"\n' +
    '        Name = "WEB-Server2-IaCOps"\n' +
    '    }\n' +
    '}\n';

export let wasServer : string = 'resource "aws_instance" "was-1" {\n' +
    '    ami                    = "ami-01e786adf9228e674"\n' +
    '    instance_type          = "t2.micro"\n' +
    '    availability_zone      = "ap-northeast-2a"\n' +
    '    vpc_security_group_ids = [aws_security_group.wasserver-sg.id]\n' +
    '    subnet_id              = aws_subnet.iacops-demo-was-subnet-1.id\n' +
    '    tags = {\n' +
    '        User = "Terraform"\n' +
    '        Name = "WAS-Server-IaCOps"\n' +
    '    }\n' +
    '}\n';

export let dbServer : string = 'resource "aws_instance" "db-1" {\n' +
    '    ami                    = "ami-0df5555b911083c78"\n' +
    '    instance_type          = "t2.micro"\n' +
    '    availability_zone      = "ap-northeast-2a"\n' +
    '    vpc_security_group_ids = [aws_security_group.database-sg.id]\n' +
    '    subnet_id              = aws_subnet.iacops-demo-database-subnet-1.id\n' +
    '    tags = {\n' +
    '        User = "Terraform"\n' +
    '        Name = "DB-Server-IaCOps"\n' +
    '    }\n' +
    '}\n';

