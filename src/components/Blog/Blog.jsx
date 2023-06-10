import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium text-red-400">
                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>An access token is a credential that grants authorization to access protected resources, while a refresh token is used to obtain a new access token without reauthentication. Access tokens are typically stored in memory or session storage, while refresh tokens should be securely stored in an HTTP-only cookie or a secure client-side storage mechanism to mitigate security risks.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 my-8">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium text-red-400">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are relational databases that use structured query language (SQL) for defining and manipulating data. They have a predefined schema, support complex joins, and provide strong consistency and ACID transactions. NoSQL databases, on the other hand, are non-relational databases that offer flexible schema, horizontal scalability, and eventual consistency. They are suitable for handling unstructured or semi-structured data and high write workloads but may sacrifice some data consistency guarantees.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium text-red-400">
                What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a lightweight web application framework for Node.js, known for its simplicity and flexibility. NestJS, built on top of Express.js, is a progressive Node.js framework that promotes structured and scalable application development with a focus on productivity and code organization.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 my-8">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium text-red-400">
                What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p>MongoDB's aggregate is a powerful method used for performing data aggregation operations on MongoDB collections. It allows you to process and transform data using a pipeline of stages. Each stage applies a specific operation to the input documents and passes the results to the next stage. Aggregation stages can include operations like filtering, grouping, sorting, projecting, and computing aggregate values. The aggregate method provides a flexible and efficient way to perform complex data analysis and aggregation tasks within MongoDB.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;