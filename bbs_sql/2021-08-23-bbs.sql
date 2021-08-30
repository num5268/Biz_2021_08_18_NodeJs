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