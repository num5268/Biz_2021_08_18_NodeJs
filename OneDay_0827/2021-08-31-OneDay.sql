-- % : 어디에서나 접근가능
CREATE USER 'node'@'%'
identified by '123123';

-- 모든 권한 부여
grant all privileges ON *.*
to 'node'@'%';

create database nodeDB;
use nodeDB;
select * from tbl_bbs;
drop table tbl_bbs;
desc tbl_bbs;
show tables;

select * from tbl_products;

create table tbl_products;
drop table tbl_orders;
drop table tbl_products;

insert into tbl_products(p_code, p_name, p_price)
values
('P0001','1000원 김밥',1000),
('P0002','참치김밥',2000),
('P0003','어묵탕',2500),
('P0004','매운 떡볶이',3000),
('P0005','돈까스',5000),
('P0006','냉모밀',5000),
('P0007','콩물국수',7000),
('P0008','오므라이스',6000),
('P0009','육개장',7000),
('P0010','김치찌개',5000);

desc tbl_table_orderstbl_table_orders;
drop table tbl_table_orders;
select * from tbl_table_orders;