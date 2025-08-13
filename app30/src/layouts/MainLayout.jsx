import React from 'react';
import { styled } from '@mui/material/styles';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import Aside from '../components/common/Aside';
import Main from '../components/common/Main';
import Footer from '../components/common/Footer';

const LayoutDiv = styled('div')`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--header-height) var(--nav-height) 1fr var(
      --footer-height
    );
`;

const MiddleDiv = styled('div')`
  display: grid;
  grid-template-columns: var(--aside-width) 1fr var(--aside-width);
  grid-template-rows: 1fr;
`;

const MainLayout = () => {
  return (
    <>
      <LayoutDiv>
        <Header />
        <Nav />
        <MiddleDiv>
          <Aside
            adImgUrl={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhIRBxQVEhMXFRkaFhgXFx4YIBsZHhkaHhgbFR0ZHSggHh0lGxgYITEhJSkrLi8uGiAzOj8sNyotMC0BCgoKDg0OGxAQGjMiHiUvKy0tMi03NzgtLi0rLS02MDg1Ky0vLS03Ky0tLS0tLTU3LTcvLy0tLS0tLS0rLS0tLf/AABEIASsAqAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCCAH/xABAEAACAQIDBQYCBwYEBwAAAAAAAQIDEQQFIQYSMUFRByJhcYGREzIjQlKhscHwFWJygtHhFBYkUyUzY5KistL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQH/xAAnEQEAAgIBAgUFAQEAAAAAAAAAAQIDEQQhMRIiQVFhBTJxofAUE//aAAwDAQACEQMRAD8Aw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANC2Y7P4YvCxq5q2t7hFae/wCvfiVbZDALMs/pQlwvd+n97G5wjGMEocErLyRXe2ukN/DwVvu1lBzzs6wawkpZXKUZJN2bvf8AX6vwMzqQlSqOM1ZptNeK4n6MMO21wP7P2krRWib3l5P9M8pae0veZhrWItWEEAC1zwAAAAAAAAAAAAAAAAAAAABeuyjCfEzapUa+SGj8+P5GppJLQo/ZThvh5RUm/rS09Lr8jTMBkWJxuHU3KNOLV43i5trk7KUbJ8Vq9OhRMTaejr4b1xYY8Xqipb269zjyv18TNO1vBbuKoV4r5ouL81qvuZrOPynG4PE04QSqfEluwkrpb1nJ/E47q3Yyd9fla4tJ/wBz/s8wefZb8LGVqiktVKMYqKl1UWnK3hvHtazEocjPivj8MT3fmQExtVs/i9mc6nhsctY8JLhKL1TXoQ5c5kxoAAeAAAAAAAAAAAAAAAAAB90qbq1YxjxbS9wNp2NwyobKU01e8G2lx4WaXjdM15uGKwt8PO0Zx7s4W0TWkoXTXNNXTRm+UU1Ryyko/ZT99fzJHC4vFYOLWEqSgm27KzV3xspppXeulrsprfTq5+NN618PotmOxNHC1MPCvPvSnZOXhF3bsratxjy1ml4HXKjvYiM7yW6pLdT7rvbWS5tbuj5XfUolapUxFRyxDc5NWbfTp0S1ei01Z9OtWdHcc5uP2d+VrdLXtbw4Ev8ApCn/AAW1HVmHbfmeFzHbK2EkpKlSjCTWq3rtvXwvb0M9JrbLA/s/aOtBKyct6Pk/0yFJx2Y8katMewAD1AAAAAAAAAAAAAAAAAJDIKLr5zRivtp+2v5EeWbs8w/+I2mp3+qt771+Vzy3ZZijd4j5bNCCpwSjwSt7ELtDtNhMk7rXxKrV1BO1lyc39Ve7fQ6toc0hk2UzrSs2tIJ85v5V5c34JmRVa8sRVlOtLelJ3lJ8W+bZREOxlyeHpCw19ts6qzvTlCmukYJ+7nf8iUyTbmo66hnKiovT4kVa38cddPFWt0KQmmtD+ktKIvbvtZu1nL7VKOIhz7svy+4zs0yjJ5/sFVoz1qULW6uK1h914/yGZk6dtMnLjz+L3AATZQAAAAAAAAAAAAAAAAv3ZNht/H1aj+rFW+9P8UUE1rsuwFTC5JKpVVviSvHysv7EL9mrh13lj4RXajj5VMxpUI/LCG+/4pNpX8ox/wDJlNhOKpNPmWjabA1M02jrzvupT3bv91KLsvNM4K2z6UfoZtvo1+FjyJjTTfBltabRCKwr7rPclKWSQjS+Z38v7nHi8FVwr72q6r8+h5MpRhvSvWEzsJi1Qz1U5/LWhKDXik5K/tJfzFQz/Bfs7Oq1L7M2l5cV9zRM5PVlQzehKHFVaf8A7K69tCd7Uckk6n+Kox4JKbXsvbT38BWdSqzUm2Pp6M5ABa54AAAAAAAAAAAAAAACU2cymrnObQpU1o3eT6R53N0wtKFDDRjTW6klp/W2lyr9nWRxy3Kfi1V9JU1fhHki2lF7bl2eLh8FNz3lE4jZ7A160pXnFybb3ZLi3dvvJ8Xdnj/lfCf7lX3h/wDBNUqiqwvHg+Hiuq8D7I7aY+FfqbM4aMLxnWk+idNfjCx8UtmsLWvHFKpu24Oor8eHcgl7SuWBz3KW9WtHq76L1djnli3Wp/8ADvpW+DjGc4+soLd9HJDekL2rX7p/bmwGRZTlclLC0oxkuEm3Jq+mjm216HRmlGGJwrp11enJOM/BNPX0dnfkfFTHV6atKFOnL/q16cF6brnL3ij+Rx0380sNd8lWm/v+AeeLan/Thjpthma4GpluYVKNbjCTX9DkL12mZRPC4iFVw3L34O6tfW10npJril8/gUU0UtFq7hyckRFvL2AASQAAAAAAAAAAAOrKqMcRmVOM+Dmr+V9fuOU68prQoZnTlU0Skrvoup5PZKv3Rtv+HpKjQjFckl7I8q7+PWVNcLXn5co/zNP0T6n1HEKeEjUjwaTfPS2qVud9DiwjxONj/pHuxndyqpKTm9E1hovRqKsviy7i0+a+mWZisbl28uWuOu7O3EYulQqKMrynL5YRTlKXiorW2usuC5tHnThjsW7f8pcHGnu1Jrh8839FCS1vFb76ElgcqoYWDSVt53lq25vrVm+9PydlbS2h3xSjFKOiWiS5LwMGXm+lP7+/pcnNz726V6QpuZKWAxloQgppXVSV681f7E6ukV4KKRw4ivWxT/1U5VPCUm16Rei4rguZcszynD5i06rlFrnG17dHvJqxA7R04YWpSo0FuwhBteLlLVtvi+6nf946nA5WG80pFPPPeZ+PlDFkraYjXVEJKK7uhIYXJMXj8MpUnBRldayd+j0UX+JHlg2SnV+k/wBvry3udvTj0sjo/UM18OCb0mImPddmtNa7h0bYZQs52dq0nrNR3oP95J/irrzaPzxOLhNqXFOzP1GuJ+fNrsjxWCzevJQagqkr2XDXR9LNWlpwvrY4H03JMxas/ljx9Y0roAOokAAAAAAAAAAAAANK7O8bWzWlHD4tuok5d1t2lGKj3ZcrNyTk39WLWrkatRoqlq9ZO13wvbgkuUVyXLzbbwPYbaD/AC/m6nNXi9JK6V0+KTeifBpvS8UnZNtbvl2YYTMsPv4KSnHnyafSSesX4M4/1CLxMezzNa1tTLqAOXMMdSwGG362vJJcW+i/XI51azaYrXrMqYjfR7V6bq0motxfVEXjcHiMRBRxUFVS4PVNeTi1JHtlubU8ZhJzqrc3NZK97Kzd1p4P2PilnuFrU18JSc27KnpvacZPWyir/Nfw1dk9McfPjtOqzuP1v5TjHfeojq4KWVUYvuUL/wATnJe0pbr9SVw+CnKzxT0XCK4L0WnojhweLlg8RVeKhGlSlaS+HKVVb+rqSa3E437r0TTab0bd4ep2kZLHMXTbkor627xfNatKK4a6vVqytcnkx8i9tTufynfFlifNC6NpLUqX7OjmUqk8ZKUozk9zWzcL91vpdWajyXnZe+M2kyfNMGqeGqpqckp3jJdxJyknvKzjK24/CZ0LHYSSuqkP+9f1NPCpfHE2npM9G3gYO97M92q2AjQourlD0XzQf4r9W+9mezjKE2pqzTs14m55vtFlmXYWTq1It2dlxv8A18ldmI46usTi5zXBtteXK/jY6FJmXvMx0rMTV4AAsYgAAAAAAAAAACSyvPMxyqqpYKbjbhq+HTR3t4XsRoPJiJ7vYnTRcu7VcwpRSxsI1PG2r9YuKXszqxW3uEzjER+MlTSVkt5vVvvNuUYrlH2MwBDHhpjvF6xqYe1mInemu0sZSlTfw56Naq9tFrquNtL+hYMkwTwmF3qqtUnaU/D7MP5Vp57z5mEUcTXoL6GTS6J6eq4MnMFtrnuEVlV3l0kr/gX58lska014eRSs7tDa2r8TKO1HL8LhM0hPD2jKavJLr1/XU8Z9oudOnZbifWyK1meY4rNMS6mNk5SM9aTE7T5PJx3p4YcqdnoeqxeJiu7Oa/mZ4gtYNzD+ylKcrzbb6s/gAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=='
            }
          />
          <Main />
          <Aside
            adImgUrl={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYJop9dUpoXmGZgGOBHKP5qaSyacTWmfuUA&s'
            }
          />
        </MiddleDiv>
        <Footer />
      </LayoutDiv>
    </>
  );
};

export default MainLayout;
